import Link from '@components/ui/link';
import { FaChevronDown } from 'react-icons/fa';
import ListMenu from '@components/ui/list-menu';
import cn from 'classnames';
import { useTranslation } from 'src/app/i18n/client';
import { ROUTES } from '@utils/routes';

interface MenuProps {
  lang: string;
  data: any;
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ lang, data, className }) => {
  const { t } = useTranslation(lang, 'menu');
  const { t: tran } = useTranslation(lang, 'footer');
  return (
    <nav
      className={cn(
        'headerMenu flex w-full relative -mx-3 xl:-mx-4',
        className,
      )}
    >
      <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
        <Link
          href={`/${lang}${ROUTES.ALL_PRODUCTS}`}
          className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
        >
          {t('all-products')}
        </Link>
      </div>
      {data?.map((item: any) => (
        <div
          className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4"
          key={item.id}
        >
          <Link
            href={`/${lang}/categories/${item.slug}`}
            className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
          >
            {t(item.translatedName)}
            {(item?.columns || (item.subcategories && item.subcategories.length > 0)) && (
              <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          {item?.subcategories?.length > 0 && Array.isArray(item?.subcategories) && (
            <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 invisible bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
              <ul className="py-5 text-sm text-brand-muted">
                {item.subcategories.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;
                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subcategories}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                      lang={lang}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}

      <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
        <Link
          href={`/${lang}/about-us`}
          className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
        >
          {tran('link-about-us')}
        </Link>
      </div>
      <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
        <Link
          href={`/${lang}/contact-us`}
          className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
        >
          {tran('link-contact-us')}
        </Link>
      </div>

    </nav>
  );
};

export default HeaderMenu;
