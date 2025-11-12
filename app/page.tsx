import Frog from "./components/Frog";
import Lilypad from "./components/Lilypad";
import Zzz from "./components/Zzz";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <div className="relative">
        <div className="absolute bottom-9 left-2 w-full flex justify-center">
          <Frog />
          <Zzz />
        </div>
        <Lilypad />
      </div>
      <div className="flex flex-col items-center">
        <p>Currently studying Computer Science and Math @ Waterloo.</p>
        <p>Website under construction...</p>
      </div>
    </div>
  );
}
