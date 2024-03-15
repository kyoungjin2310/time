type TabLink = TabLinkList[];
type TabLinkList = {
  id: number;
  tabTitle: string;
  tabClass: string;
  tabClicked: boolean;
};

type TabNavLink = {
  id: number | null;
  tabTitle: string;
  isActive: boolean;
  onClick: (id: number | null) => void;
};
