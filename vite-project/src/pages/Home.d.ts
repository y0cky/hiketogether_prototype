import '../styles/index.css';
import '../styles/App.css';
type Props = {
    isUrban: boolean;
    setIsUrban: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Home({ isUrban, setIsUrban }: Props): import("react/jsx-runtime").JSX.Element;
export {};
