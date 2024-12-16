import { getRequest } from '@/libs';
import type { Story, StoryStatus } from '@/models/stories';

type PaginatedResponse<T> = {
  items: T;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

type Filters = {
  title?: string;
  status?: StoryStatus;
  page: number;
  per_page: number;
};

export async function getStories(filters: Filters) {
  return getRequest<PaginatedResponse<Story[]>>('api/stories', {
    params: filters,
  });
}
