import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./Store";

//State Structure
interface unionState {
  crawlers: crawlerData[];
}

interface crawlerData {
  pilotBay: pilotData[];
  mechBay: mechData[];
}

interface pilotData {
  name: string;
  callsign: string;
}

interface mechData {
  name: string;
  chassis: string;
  imgUrl: string;
  stats: mechStats;
  modules: number[];
  systems: number[];
  cargo: string[];
}

//Object Variables
interface mechStats {
  structurepoints: number;
  energypoints: number;
  heatcap: number;
  systemslots: number;
  moduleslots: number;
  cargocap: number;
  techlevel: number;
  salvagevalue: number;
}

//Upload Props
interface mechTotalUpload {
  crawlerID?: number;
  mechID?: number;

  name: string;
  chassis: string;
  imgUrl: string;
  stats: mechStats;
  modules: number[];
  systems: number[];
  cargo: string[];
}

interface mechStatsUpload {
  crawlerID?: number;
  mechID?: number;

  stats: mechStats;
}

interface mechEquipmentUpload {
  crawlerID?: number;
  mechID?: number;

  equipment: number[];
}

interface mechCargoUpload {
  crawlerID?: number;
  mechID?: number;

  equipment: string[];
}

interface mechInfoUpload {
  crawlerID?: number;
  mechID?: number;

  info: string;
}

// const initialPilotState: pilotData = {
//   name: "",
//   callsign: "",
// };

// const initialMechState: mechData = {
//   name: "",
//   chassis: "",
//   imgUrl: "",
//   stats: {
//     structurepoints: 0,
//     energypoints: 0,
//     heatcap: 0,
//     systemslots: 0,
//     moduleslots: 0,
//     cargocap: 0,
//     techlevel: 0,
//     salvagevalue: 0,
//   },
//   modules: [],
//   systems: [],
// };

const initialCrawlerState: crawlerData = {
  pilotBay: [],
  mechBay: [],
};

const initialState: unionState = {
  // crawlers: [{ pilotBay: [initialPilotState], mechBay: [initialMechState] }],
  crawlers: [initialCrawlerState],
};

export const mechSlice = createSlice({
  name: "mech",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    pushNewMech: (state, action: PayloadAction<mechTotalUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;

      const obj = {
        name: action.payload.name,
        chassis: action.payload.chassis,
        imgUrl: action.payload.imgUrl,
        stats: {
          structurepoints: action.payload.stats.structurepoints,
          energypoints: action.payload.stats.energypoints,
          heatcap: action.payload.stats.heatcap,
          systemslots: action.payload.stats.systemslots,
          moduleslots: action.payload.stats.moduleslots,
          cargocap: action.payload.stats.cargocap,
          techlevel: action.payload.stats.techlevel,
          salvagevalue: action.payload.stats.salvagevalue,
        },
        modules: action.payload.modules,
        systems: action.payload.systems,
        cargo: action.payload.cargo,
      };
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }

      console.log(
        "PushNewMech ",
        state.crawlers[crawlerID].mechBay,
        "    \n Action: ",
        action.payload
      );
      state.crawlers[crawlerID].mechBay[mechID] = obj;
    },

    updateMechDetails: (state, action: PayloadAction<mechTotalUpload>) => {
      console.log("updateMechDetails ", state, "    \n Action: ", action);
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }

      state.crawlers[crawlerID].mechBay[mechID].name = action.payload.name;
      state.crawlers[crawlerID].mechBay[mechID].chassis =
        action.payload.chassis;
      state.crawlers[crawlerID].mechBay[mechID].imgUrl = action.payload.imgUrl;
      state.crawlers[crawlerID].mechBay[mechID].stats = action.payload.stats;
      state.crawlers[crawlerID].mechBay[mechID].modules =
        action.payload.modules;
      state.crawlers[crawlerID].mechBay[mechID].systems =
        action.payload.systems;
      state.crawlers[crawlerID].mechBay[mechID].cargo = action.payload.cargo;
    },

    updateMechStats: (state, action: PayloadAction<mechStatsUpload>) => {
      console.log("updateMechStats ", state, "    \n Action: ", action);
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }

      state.crawlers[crawlerID].mechBay[mechID].stats = action.payload.stats;
    },

    updateMechModules: (state, action: PayloadAction<mechEquipmentUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }
      console.log("updateMechModules  \n Action: ", action.payload);

      state.crawlers[crawlerID].mechBay[mechID].modules =
        action.payload.equipment;
    },

    updateMechSystems: (state, action: PayloadAction<mechEquipmentUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }
      console.log("updateMechSystems  \n Action: ", action.payload);

      state.crawlers[crawlerID].mechBay[mechID].systems =
        action.payload.equipment;
    },

    updateMechCargo: (state, action: PayloadAction<mechCargoUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }
      console.log("updateMechCargo  \n Action: ", action.payload.equipment);

      state.crawlers[crawlerID].mechBay[mechID].cargo =
        action.payload.equipment;
    },

    updateMechName: (state, action: PayloadAction<mechInfoUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }

      console.log("updateMechName \n Action: ", action.payload.info);
      state.crawlers[crawlerID].mechBay[mechID].name = action.payload.info;
    },

    updateMechImage: (state, action: PayloadAction<mechInfoUpload>) => {
      let crawlerID = action.payload.crawlerID;
      let mechID = action.payload.mechID;
      if (crawlerID == undefined || mechID == undefined) {
        return;
      }

      state.crawlers[crawlerID].mechBay[mechID].imgUrl = action.payload.info;
    },

    // updateMechChassis: (state, action: PayloadAction<mechInfoUpload>) => {
    //   let crawlerID = action.payload.crawlerID;
    //   let mechID = action.payload.mechID;
    //   if (crawlerID == undefined || mechID == undefined) {
    //     return;
    //   }

    //   state.crawlers[crawlerID].mechBay[mechID].chassis = action.payload.info;
    // },

    // postAdded(state, action) {
    // state.push(action.payload)
    // }
    // postUpdated(state, action) {
    //   const { id, title, content } = action.payload
    //   const existingPost = state.find(post => post.id === id)
    //   if (existingPost) {
    //     existingPost.title = title
    //     existingPost.content = content
    //   }
    // }
  },
});

export const {
  pushNewMech,
  updateMechDetails,
  updateMechStats,
  updateMechModules,
  updateMechSystems,
  updateMechName,
  updateMechImage,
  // updateMechChassis,
  updateMechCargo,
} = mechSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectUnion = (state: RootState) => state;
export const selectDatabase = (state: RootState) => state.union;

export const saveNewMech =
  (details: mechTotalUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(pushNewMech(details));
  };

export const saveMechDetails =
  (details: mechTotalUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechDetails(details));
  };

export const saveMechStats =
  (details: mechStatsUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechStats(details));
  };

export const saveMechModules =
  (details: mechEquipmentUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechModules(details));
  };
export const saveMechSystems =
  (details: mechEquipmentUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechSystems(details));
  };
export const saveMechCargo =
  (details: mechCargoUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechCargo(details));
  };
export const saveMechName =
  (details: mechInfoUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechName(details));
  };
export const saveMechImage =
  (details: mechInfoUpload): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateMechImage(details));
  };
// export const saveMechChassis =
//   (details: mechInfoUpload): AppThunk =>
//   (dispatch, getState) => {
//     dispatch(updateMechChassis(details));
//   };

export default mechSlice.reducer;
