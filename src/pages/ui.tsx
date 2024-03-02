import { StateUpdater } from "preact/hooks";

type UiProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

const Nav = (props: UiProps) => {
  return (
  <>
  <nav class='flex justify-between'>
    <p>Felipe_Izolan</p>
    <ul class='list-none flex'>
      <li class='ml-5 mr-5 hover:text-green cursor-pointer' style={{transition: '0.2s'}}>home</li>
      <li class='ml-5 mr-5 hover:text-green cursor-pointer' style={{transition: '0.2s'}}>projects</li>
      <li onClick={() => props.setPage('boot')} class='ml-5 mr-5 hover:text-green cursor-pointer' style={{transition: '0.2s'}}>reboot</li>
    </ul>
  </nav>
  <hr class='border-dashed mt-3' />
  </>
  );
}

const Ui = (props: UiProps) => {
  return (
  <main class='animated animated-bounce-in-down'>
    <Nav setPage={props.setPage}/>
  </main>
  );
}

export default Ui;
