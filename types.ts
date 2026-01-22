
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}
