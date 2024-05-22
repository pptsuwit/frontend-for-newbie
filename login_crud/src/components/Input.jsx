export default function Input(props) {
  return (
    <div>
      <input
        className={`w-full py-2 px-3 shadow 
        focus:outline-none focus:border-theme-400 focus:border-2 border rounded 
        text-gray-700
        bg-white ${props.className}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      ></input>
      {props.errors?.[props.name] && (
        <p className="text-red-500 text-sm">
          {props.errors?.[props.name]?.message}
        </p>
      )}
    </div>
  );
}
