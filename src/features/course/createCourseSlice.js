import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [],
  image: {},
  activityModal: {
    isOpen: false,
    sectionIndex: null,
  },
};
export const createCourseSlice = createSlice({
  name: "create_course",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    addSection: (state, action) => {
      state.sections = [
        ...state.sections,
        { id: Date.now(), title: "بخش جدید", activities: [] },
      ];
    },
    updateSectionTitle: (state, action) => {
      const { sectionId, newTitle } = action.payload;

      const section = state.sections.find(
        (section) => section.id === sectionId
      );
      if (section) {
        section.title = newTitle;
      }
    },
    deleteSection: (state, action) => {
      state.sections = state.sections.filter(
        (item) => item.id !== action.payload
      );
    },
    addActivity: (state, action) => {
      const sections = state.sections;
      const section = sections[state?.activityModal?.sectionIndex];
      section?.activities.push({ id: Date.now(), ...action.payload });
      state.sections = sections;
    },
    updateActivityTitle: (state, action) => {
      const { sectionId, activityId, newTitle } = action.payload;

      const section = state.sections.find(
        (section) => section.id === sectionId
      );

      if (section) {
        const activity = section.activities.find(
          (activity) => activity.id === activityId
        );
        if (activity) {
          activity.title = newTitle;
        }
      }
    },
    deleteActivity: (state, action) => {
      const { sectionId, activityId } = action.payload;
      const section = state.sections.find(
        (section) => section.id === sectionId
      );
      if (section) {
        section.activities = section.activities.filter(
          (activity) => activity.id !== activityId
        );
      }
    },
    openModal: (state, action) => {
      state.activityModal = { isOpen: true, sectionIndex: action.payload - 1 };
    },
    closeModal: (state, action) => {
      state.activityModal = { isOpen: false, sectionIndex: null };
    },
  },
});
export const {
  setImage,
  addSection,
  updateSectionTitle,
  deleteSection,
  openModal,
  closeModal,
  addActivity,
  deleteActivity,
  updateActivityTitle,
} = createCourseSlice.actions;
export default createCourseSlice.reducer;
