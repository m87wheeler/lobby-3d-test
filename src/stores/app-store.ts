import create from "zustand";

export type RoomPropertiesType = {
  id: number;
  title: string;
  description: string;
};

export type HotspotType = {
  id: number;
  position: [number, number, number];
  scale: number;
  properties: RoomPropertiesType;
};

interface IAppStore {
  loading: boolean;
  handleLoading: (loading: boolean) => void;
  selectedRoom: null | number;
  handleSelectedRoom: (room: null | number) => void;
  hotspots: HotspotType[];
}

export const useAppStore = create<IAppStore>((set, get) => ({
  loading: true,
  handleLoading: (loading) => set({ loading }),
  selectedRoom: null,
  handleSelectedRoom: (selectedRoom) => set({ selectedRoom }),
  hotspots: [
    {
      id: 1,
      position: [-5.7, -0.5, 0.65],
      scale: 0.9,
      properties: {
        id: 1,
        title: "Room 1",
        description:
          "Dolore in officia proident consequat dolor. Proident sint officia velit ipsum eu.",
      },
    },
    {
      id: 2,
      position: [5.45, -0.5, 1.5],
      scale: 0.8,
      properties: {
        id: 1,
        title: "Room 2",
        description:
          "Elit laboris elit incididunt irure officia mollit. Mollit cupidatat aliqua duis culpa non laboris amet incididunt non non.",
      },
    },
    {
      id: 3,
      position: [1.55, -0, -5.75],
      scale: 0.4,
      properties: {
        id: 1,
        title: "Room 3",
        description:
          "Qui qui ullamco eiusmod voluptate velit commodo est. Reprehenderit elit eiusmod do non. Do eu do minim mollit.",
      },
    },
    {
      id: 4,
      position: [2.75, 1.8, 5],
      scale: 0.3,
      properties: {
        id: 1,
        title: "Room 4",
        description:
          "Ad eu quis magna ut qui proident non ad ullamco culpa ad eiusmod elit id. ",
      },
    },
  ],
}));
