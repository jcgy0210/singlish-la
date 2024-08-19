interface Props {
  onClose: () => void;
}

const ContactUs = ({ onClose }: Props) => {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-slate-900">
      <button className="top-section left-4" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#900603"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12 l7.5-7.5"
          />
        </svg>
      </button>

      <div className="w-fill flex justify-center items-center text-2xl text-black font-bold p-4 dark:text-gray-200">
        <div className="w-full flex flex-col p-4 justify-center items-center">
          {/* Title */}
          <h1 className="text-5xl p-4">Settings</h1>

          {/* Subtitle */}
          <h2 className="text-4xl p-4">Trying To Find Us Ah?</h2>

          <div className="w-full py-4 flex flex-col justify-stretch items-center">
            <h3 className="section-title text-3xl p-4">Norh Our Contact Info</h3>

            <p className="p-4">Phone Number: 9XXX XXXX</p>

            <p className="p-4">Email: dummyUser123ABC@email.com</p>

            <p className="p-4">Location: Singapore Institute of Management Global Education, Singapore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
