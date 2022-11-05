import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to="/" onClick={toggle}>
            HOME
          </SidebarRoute>
          <SidebarRoute to="/sports" onClick={toggle}>
            SPORTS
          </SidebarRoute>
          <SidebarRoute to="/funny" onClick={toggle}>
            FUNNY
          </SidebarRoute>
          <SidebarRoute to="/create" onClick={toggle}>
            CREATE
          </SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
