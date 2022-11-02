import Holo from "./Holo/Holo";
import Navigation from "./Navigation/Navigation";
import OpenAnimation from "./OpenAnimation/OpenAnimation";
export default function Home() {
  let x = true;
  return (
    <main>
      <Navigation></Navigation>
      <OpenAnimation></OpenAnimation>

      {/* style--------------------------------------------------- */}
      <style jsx>{``}</style>
    </main>
  );
}
