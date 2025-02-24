import Heading from '@components/ui/heading';
import CategoryFilterMenu from '@components/search/category-filter-menu';
import Alert from '@components/ui/alert';
import Scrollbar from '@components/ui/scrollbar';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import { useCategoriesMenuQuery } from '@framework/category/get-all-categories-menu';
import { useTranslation } from 'src/app/i18n/client';
import { Category } from '@framework/types';

export const CategoryFilter = ({ lang, categories, loading, error }: { lang: string; categories: Category[]; loading: boolean; error: any }) => {
  const { t } = useTranslation(lang, 'common');


  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="px-2 mt-8 w-72">
          <CategoryListCardLoader uniqueKey="category-list-card-loader" />
        </div>
      </div>
    );
  }
  if (error) return <Alert message={error.message} />;

  if (categories?.length == 0) {
    return (
      <div></div>
    );
  }

  return (
    <div className="block">
      <Heading className="mb-5 mt-1">{t('text-categories')}</Heading>
      <div className="max-h-full overflow-hidden border rounded border-border-base">
        <Scrollbar className="w-full category-filter-scrollbar">
          {categories?.length ? (
            <CategoryFilterMenu items={categories} lang={lang} />
          ) : (
            <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
              {t('text-no-results-found')}
            </div>
          )}
        </Scrollbar>
      </div>
    </div>
  );
};
