import { create } from 'zustand';

export type BriefingData = {
  needs: string[];
  businessDescription: string;
  businessMoment: string;
  objective: string;
  targetAudience: string;
  audienceFocus: string;
  competitors: string;
  creativeDirection: string;
  expectations: string;
  deadline: string;
  investmentRange: string;
  mainPain: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  logoLink: string;
  agreesToTerms: boolean;
};

type BriefingStore = {
  currentStep: number;
  data: Partial<BriefingData>;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (newData: Partial<BriefingData>) => void;
  reset: () => void;
};

export const useBriefingStore = create<BriefingStore>((set) => ({
  currentStep: 0,
  data: {
    needs: [],
    agreesToTerms: false,
  },
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 15) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  updateData: (newData) =>
    set((state) => ({
      data: { ...state.data, ...newData },
    })),
  reset: () => set({ currentStep: 0, data: { needs: [], agreesToTerms: false } }),
}));
