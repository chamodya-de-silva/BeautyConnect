import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import ClientSubNavbar from '../../components/ClientSubNavbar';

const ClientSettings = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', phone: '', address: '', profilePicture: '' });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login/client');
                    return;
                }
                const response = await fetch('http://localhost:5000/api/users/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    // Fallback to local storage if API fails
                    const stored = localStorage.getItem('user');
                    if (stored) {
                        setUser(JSON.parse(stored));
                    }
                }
            } catch (err) {
                console.error(err);
                const stored = localStorage.getItem('user');
                if (stored) setUser(JSON.parse(stored));
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/users/profile', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: user.name,
                    phone: user.phone,
                    address: user.address,
                    profilePicture: user.profilePicture
                })
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setMessage('Profile updated successfully!');
            } else {
                setMessage('Failed to update profile.');
            }
        } catch (err) {
            console.error(err);
            setMessage('An error occurred while saving.');
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(''), 3000);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <ClientSubNavbar />
            <div className="pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 font-serif">Account Settings</h1>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                    {message && (
                        <div className={`p-4 mb-6 rounded-xl ${message.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {message}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Profile Picture Upload */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 group cursor-pointer" onClick={() => fileInputRef.current.click()}>
                                <img 
                                    src={user.profilePicture || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop'} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-sm font-bold">Change</span>
                                </div>
                            </div>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <p className="text-sm text-gray-500">Click image to upload new profile picture</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" name="name" value={user.name || ''} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Cannot be changed)</label>
                            <input type="email" value={user.email || ''} readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-200 text-gray-500 outline-none cursor-not-allowed" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" name="phone" value={user.phone || ''} onChange={handleChange} placeholder="+94 7X XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                            <input type="text" name="address" value={user.address || ''} onChange={handleChange} placeholder="e.g. Colombo, Sri Lanka" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Password Change (Coming soon)</h3>
                            <div className="space-y-4">
                                <div>
                                    <input type="password" disabled placeholder="Current Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 cursor-not-allowed" />
                                </div>
                                <div>
                                    <input type="password" disabled placeholder="New Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 cursor-not-allowed" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" disabled={saving} className="w-full bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 hover:-translate-y-0.5 transition-all disabled:opacity-70">
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClientSettings;
