import stories from '@/mocks/stories.json';
import type { Story } from '@/models/stories';

type StoryList = Record<'items', Story[]>;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filteredStories = filterStories(
    stories as StoryList,
    searchParams.get('status'),
    searchParams.get('title'),
  );

  return new Response(
    JSON.stringify(
      getPagination(
        filteredStories,
        Number(searchParams.get('page') ?? 1),
        Number(searchParams.get('per_page') ?? 10),
      ),
    ),
    {
      status: 200,
    },
  );
}

function filterStories(
  { items }: StoryList,
  statusFilter: string | null,
  titleFilter: string | null,
) {
  if (!statusFilter && !titleFilter) {
    return { items };
  }

  const filteredItems = [...items].filter((story) => {
    const matchesStatus = statusFilter ? story.status === statusFilter : true;
    const matchesTitle = titleFilter
      ? filterOptions(story.title, titleFilter)
      : true;

    // Include story if it matches both the status and/or title filter
    return matchesStatus && matchesTitle;
  });

  return { items: filteredItems };
}

function getPagination({ items }: StoryList, page = 1, perPage = 10) {
  const totalPages = Math.ceil(items.length / perPage);

  const currentPage = page >= totalPages ? totalPages : page;

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const pageItems = items.slice(startIndex, endIndex);

  return {
    items: pageItems,
    page: currentPage,
    per_page: perPage,
    total_pages: totalPages,
    total: items.length,
  };
}

function filterOptions(currentTitle: string, title: string): boolean {
  return currentTitle.toLowerCase().includes(title.toLowerCase());
}
