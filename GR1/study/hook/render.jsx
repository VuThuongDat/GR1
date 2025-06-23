import { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}