import { CogIcon } from "@heroicons/react/16/solid";

interface SettingsButtonProps {
  onClick: () => void;
}

const SettingsButton: FC<SettingsButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={onClick}
        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
      >
        <CogIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default SettingsButton;
