import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 m-0"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-6xl font-serif font-extrabold p-10">Background Changer</h1>
      <div className="fixed top-0 left-0 h-full flex flex-col justify-center p-4">
        <div className="h-screen flex flex-col justify-center space-y-5 shadow-2xl rounded-3xl px-3 py-2">
          <button
            onClick={() => setColor("#d9ed92")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#d9ed92" }}
          >
            Key Lime
          </button>

          <button
            onClick={() => setColor("#b5e48c")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#b5e48c" }}
          >
            Yellow-Green
          </button>

          <button
            onClick={() => setColor("#99d98c")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#99d98c" }}
          >
            Light Green
          </button>

          <button
            onClick={() => setColor("#76c893")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#76c893" }}
          >
            Dark Sea Green
          </button>

          <button
            onClick={() => setColor("#52b69a")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#52b69a" }}
          >
            Ocean Green
          </button>

          <button
            onClick={() => setColor("#34a0a4")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#34a0a4" }}
          >
            Keppel
          </button>

          <button
            onClick={() => setColor("#168aad")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#168aad" }}
          >
            Blue-Green
          </button>

          <button
            onClick={() => setColor("#1a759f")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#1a759f" }}
          >
            Lapis Lazuli
          </button>

          <button
            onClick={() => setColor("#1e6091")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#1e6091" }}
          >
            Matisse
          </button>

          <button
            onClick={() => setColor("#184e77")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#184e77" }}
          >
            Chathams Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
