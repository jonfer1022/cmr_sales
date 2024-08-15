import { RiLogoutCircleLine } from 'react-icons/ri';

interface ILogoutProps {
  size?: number;
  color?: string;
}

export const LogoutIcon: React.FC<ILogoutProps> = ({ size, color }) => (
  <RiLogoutCircleLine size={size} color={color} />
);
