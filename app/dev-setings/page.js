import React from 'react';

const DevSettings = () => {
    return (
        <article className="prose prose-slate lg:prose-xl">
            <p className="mb-6 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Next.js?</h2>
            <p className="mb-4 text-gray-700">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li>Server-side rendering by default</li>
                <li>Automatic code splitting for faster loads</li>
                <li>Simple file-based routing system</li>
                <li>Built-in image optimization</li>
            </ul>
            <div className="bg-slate-900 text-slate-100 p-6 rounded-lg font-mono text-sm mb-8 shadow-inner">
                <p className="text-slate-400 mb-2" />
            </div>
            <p className="text-gray-700">
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
                turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
                sollicitudin mauris.
            </p>
        </article>
    );
};

export default DevSettings;