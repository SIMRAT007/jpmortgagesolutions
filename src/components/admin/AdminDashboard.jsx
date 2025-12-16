import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, observeAuthState } from '../../../backend/services/authService';
import {
  getAllTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../../../backend/services/teamsService';
import {
  getCompanySettings,
  saveCompanySettings,
  defaultSettings
} from '../../../backend/services/settingsService';
import logo from '../../assets/logo.png';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [activeTab, setActiveTab] = useState('team'); // 'team' or 'settings'
  const [companySettings, setCompanySettings] = useState(defaultSettings);
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    description: '',
    initials: '',
    image: '',
    order: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = observeAuthState((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadTeamMembers();
        loadCompanySettings();
      } else {
        navigate('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const loadTeamMembers = async () => {
    setLoading(true);
    const result = await getAllTeamMembers();
    if (result.success) {
      // Sort by order field
      const sorted = result.data.sort((a, b) => (a.order || 0) - (b.order || 0));
      setTeamMembers(sorted);
    }
    setLoading(false);
  };

  const loadCompanySettings = async () => {
    const result = await getCompanySettings();
    if (result.success) {
      setCompanySettings(result.data);
    }
  };

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const socialKey = name.replace('social_', '');
      setCompanySettings(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [socialKey]: value
        }
      }));
    } else {
      setCompanySettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSettingsSaving(true);
    const result = await saveCompanySettings(companySettings);
    if (result.success) {
      alert('Settings saved successfully!');
    } else {
      alert('Failed to save settings: ' + result.error);
    }
    setSettingsSaving(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate initials from name
    if (name === 'name') {
      const initials = value
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
      setFormData(prev => ({ ...prev, initials }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const teamData = {
        ...formData,
        order: parseInt(formData.order) || 0
      };

      if (editingMember) {
        const result = await updateTeamMember(editingMember.id, teamData);
        if (result.success) {
          await loadTeamMembers();
          resetForm();
        } else {
          alert('Failed to update: ' + result.error);
        }
      } else {
        const result = await addTeamMember(teamData);
        if (result.success) {
          await loadTeamMembers();
          resetForm();
        } else {
          alert('Failed to add: ' + result.error);
        }
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    setSaving(false);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name || '',
      position: member.position || '',
      description: member.description || '',
      initials: member.initials || '',
      image: member.image || '',
      order: member.order || 0
    });
    setShowAddModal(true);
  };

  const handleDelete = async (member) => {
    if (window.confirm(`Are you sure you want to delete ${member.name}?`)) {
      const result = await deleteTeamMember(member.id);
      if (result.success) {
        await loadTeamMembers();
      } else {
        alert('Failed to delete: ' + result.error);
      }
    }
  };

  const openAddModal = () => {
    // Calculate next order number
    const maxOrder = teamMembers.length > 0 
      ? Math.max(...teamMembers.map(m => m.order || 0)) 
      : 0;
    setFormData({
      name: '',
      position: '',
      description: '',
      initials: '',
      image: '',
      order: maxOrder + 1
    });
    setEditingMember(null);
    setShowAddModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      description: '',
      initials: '',
      image: '',
      order: 0
    });
    setEditingMember(null);
    setShowAddModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, {user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('team')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'team'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Team Members
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Company Settings
            </button>
          </nav>
        </div>

        {/* Settings Tab Content */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Contact Information</h2>
            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={companySettings.email || ''}
                    onChange={handleSettingsChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="admin@jpmortgagesolutions.ca"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={companySettings.phone || ''}
                    onChange={handleSettingsChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="+1-780-362-7172"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={companySettings.address || ''}
                  onChange={handleSettingsChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="5708 72 Street NW, Edmonton, AB T6B 3J4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company Description</label>
                <textarea
                  name="companyDescription"
                  value={companySettings.companyDescription || ''}
                  onChange={handleSettingsChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Brief description about your company..."
                />
              </div>

              {/* Social Media Links */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
                    <input
                      type="url"
                      name="social_facebook"
                      value={companySettings.socialMedia?.facebook || ''}
                      onChange={handleSettingsChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="https://facebook.com/yourpage"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
                    <input
                      type="url"
                      name="social_instagram"
                      value={companySettings.socialMedia?.instagram || ''}
                      onChange={handleSettingsChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="https://instagram.com/yourpage"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                    <input
                      type="url"
                      name="social_linkedin"
                      value={companySettings.socialMedia?.linkedin || ''}
                      onChange={handleSettingsChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="https://linkedin.com/company/yourcompany"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Twitter/X URL</label>
                    <input
                      type="url"
                      name="social_twitter"
                      value={companySettings.socialMedia?.twitter || ''}
                      onChange={handleSettingsChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="https://twitter.com/yourhandle"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={settingsSaving}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {settingsSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Team Tab Content */}
        {activeTab === 'team' && (
        <>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Team Members ({teamMembers.length})
          </h2>
          <button
            onClick={openAddModal}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            + Add Team Member
          </button>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">No team members found. Add your first team member!</p>
            </div>
          ) : (
            teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{member.initials}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-indigo-600 font-medium">{member.position}</p>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">#{member.order || 0}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{member.description}</p>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(member)}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(member)}
                      className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        </>
        )}
      </main>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  {editingMember ? 'Edit Team Member' : 'Add Team Member'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Image URL
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                      {formData.image ? (
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="text-gray-400 text-sm">Invalid URL</span>';
                          }}
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">No image</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-gray-500 mt-1">Enter a direct image URL (e.g.https://xyz/abc/Team6.jpg [use website - imgbb.com/])</p>
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g., John Smith"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Position *</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g., Mortgage Associate"
                  />
                </div>

                {/* Initials */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Initials</label>
                  <input
                    type="text"
                    name="initials"
                    value={formData.initials}
                    onChange={handleInputChange}
                    maxLength={2}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g., JS (auto-generated)"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Brief description about the team member..."
                  />
                </div>

                {/* Display Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Display Order</label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    min="0"
                    disabled
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-300 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    {saving ? 'Saving...' : (editingMember ? 'Update' : 'Add Member')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
