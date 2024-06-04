import { create } from "zustand";

export interface FormData {
  name: string;
  email: string;
  phone: string;

  department: string;
  role: string;
}

export interface FormActions {
  updateField: (partial: Partial<FormData>) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",

  department: "",
  role: "",
};

export const useFromStore = create<FormData & FormActions>((set) => ({
  ...initialFormData,
  updateField: (partial) => {
    set((state) => ({ ...state, ...partial }));
  },
  resetForm: () => {
    set(initialFormData);
  },
}));
