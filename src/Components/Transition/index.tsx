import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
interface Props {
  location: string;
  children: any;
}
type TransitionStyle = {
  position?: string;
  opacity?: number;
  transform?: string;
  transition?: string;
};
interface ITransitionStyles {
  entering: TransitionStyle;
  entered: TransitionStyle;
  exiting: TransitionStyle;
  exited?: string;
  unmounted?: string;
}

const TIMEOUT = 200;
const getTransitionStyles: ITransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(-50px)`,
  },
};
const Transition = ({ children, location }: Props) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            style={{
              ...(getTransitionStyles[status] as {}),
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
