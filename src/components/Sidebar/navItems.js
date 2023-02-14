import {
  BookmarkFillIcon,
  BookmarkIcon,
  ExploreFillIcon,
  ExploreIcon,
  HomeFillIcon,
  HomeIcon,
  ListsFillIcon,
  ListsIcon,
  MessagesFillIcon,
  MessagesIcon,
  MoreIcon,
  NotificationFillIcon,
  NotificationIcon,
  ProfileFillIcon,
  ProfileIcon
} from "../../assets/icons/menu";

export const navItems = [
  {
    icon: HomeIcon,
    iconFill: HomeFillIcon,
    text: "Home",
    path: "/home"
  },
  {
    icon: ExploreIcon,
    iconFill: ExploreFillIcon,
    text: "Explore"
  },
  {
    icon: NotificationIcon,
    iconFill: NotificationFillIcon,
    text: "Notifications"
  },
  {
    icon: MessagesIcon,
    iconFill: MessagesFillIcon,
    text: "Messages"
  },
  {
    icon: BookmarkIcon,
    iconFill: BookmarkFillIcon,
    text: "Bookmarks"
  },
  {
    icon: ListsIcon,
    iconFill: ListsFillIcon,
    text: "Lists"
  },
  {
    icon: ProfileIcon,
    iconFill: ProfileFillIcon,
    text: "Profile",
    path: "/profile"
  },
  {
    icon: MoreIcon,
    iconFill: MoreIcon,
    text: "More"
  },
]