export type Story = {
  id: number;
  title: string;
  pages: Array<{
    download_url: string;
  }>;
  status: StoryStatus;
  last_modified: string;
  end_date?: string;
  live_date?: string;
};

export type StoryStatus = 'draft' | 'scheduled' | 'live' | 'past';
