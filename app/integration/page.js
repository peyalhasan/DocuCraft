import React from 'react';

const IntegrationPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Integrations</h1>
        <p className="text-slate-500 mt-2">Connect your favorite tools to streamline your workflow.</p>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: GitHub */}
        <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">
              🐙
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Connected</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800">GitHub</h3>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            Sync your repositories and automate documentation updates.
          </p>
          <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition">
            Configure
          </button>
        </div>

        {/* Card 2: Slack */}
        <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
              💬
            </div>
            <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">Not Connected</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800">Slack</h3>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            Get instant notifications in your channels for every change.
          </p>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Connect
          </button>
        </div>

        {/* Card 3: Discord */}
        <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">
              🎮
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-800">Discord</h3>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            Engage with your community through dedicated webhook alerts.
          </p>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Connect
          </button>
        </div>

      </div>

      {/* API Key Section */}
      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Need a custom integration?</h2>
        <p className="text-slate-600 mb-6">Use our API to build your own custom connection.</p>
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
          <div className="bg-white border border-slate-300 rounded-lg px-4 py-2 flex-grow text-sm font-mono text-slate-500 truncate">
            sk_test_51MzZ2kLp9jX0...
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800">
            Copy Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;