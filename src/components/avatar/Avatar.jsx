const Avatar = ({ image }) => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
      <img
        src={image}
        alt="dsfsdf"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
