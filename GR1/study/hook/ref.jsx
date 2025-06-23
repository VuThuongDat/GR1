import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Nhấn nút để focus" />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
}
