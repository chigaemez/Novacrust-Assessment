💸 Novacrust – Recipient Details Flow

Novacrust is a modern frontend application built with React, TypeScript, Tailwind CSS, and Context API.
It focuses on a smooth and user-friendly recipient details flow, including bank selection, account number validation, and account name resolution.

🚀 Features

✅ Bank selection dropdown (mock Nigerian banks)

✅ Account number input with validation

✅ Auto-fetching account name (loading state supported)

✅ Form validation with inline error messages

✅ Responsive design (mobile → desktop)

✅ Clean UI built with Tailwind CSS

✅ Global state management using Context API

✅ Client-side navigation with React Router



🛠️ Tech Stack

React

TypeScript

Tailwind CSS

Context API

React Router

Vite (for fast development)

📂 Project Structure
src/
│── assets/           # Icons and images
│── Context/          # Context API store
│── Stores/
│   └── Datas.ts      # Mock banks data
│── pages/
│   └── Recipient_Details.tsx
│── routes/           # App routes
│── App.tsx
│── main.tsx


🏦 Mock Banks Data

The project uses a mock list of Nigerian banks stored in:

export const banks: string[] = [
  'Access Bank',
  'Citibank Nigeria',
  'Ecobank Nigeria',
  'Fidelity Bank',
  'First Bank of Nigeria',
  'FCMB',
  'GTBank',
  'Kuda Bank',
  'Moniepoint Microfinance Bank',
  'Opay',
  'Palmpay',
  'UBA',
  'Zenith Bank'
]

✅ Form Validation Logic

The form prevents navigation unless:

A bank is selected

Account number is entered

Account name is resolved

Errors are displayed below each input field for better UX.



📱 Responsive Design

Full width on mobile

Centered with max width on tablet & desktop

Tailwind utility classes ensure consistency across screen sizes


⚙️ Installation & Setup

-Clone the repository
git clone https://github.com/your-username/novacrust.git

-Install dependencies
npm install

-Start development server
npm run dev
or 
yarn dev


🧠 State Management

Global state is handled with Context API, including:

Selected bank

Account number

Account name

Dropdown open/close state

Loading states

This avoids prop drilling and keeps the app scalable.

👨‍💻 Author

Orji Christopher
Frontend Developer (React & TypeScript)



