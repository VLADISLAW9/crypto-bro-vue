import { ROUTES } from '@/utils/constants';

export const useNavbar = () => {
  const links = [
    { icon: 'pi pi-home', label: 'Главная', route: ROUTES.HOME },
    { icon: 'pi pi-star', label: 'Избранное', route: ROUTES.FAVORITE },
    { icon: 'pi pi-user', label: 'Профиль', route: ROUTES.PROFILE },
    { icon: 'pi pi-cog', label: 'Настройки', route: ROUTES.SETTINGS }
  ];

  return { links };
};
