import anime from "animejs";

const useTransition = () => {
  const onBeforeEnter = (el: Element) => {
    const ele = el as HTMLElement;
    ele.style.transform = "translateX(-100%)";
  };

  const onEnter = (el: Element, done: () => void) => {
    anime({
      targets: el,
      translateX: [
        {
          value: "-100%"
        },
        {
          value: 0,
          duration: 800
        }
      ],
      easing: "easeOutElastic(1, .8)",
      complete: () => {
        done();
      }
    });
  };

  const onLeave = (el: Element, done: () => void) => {
    anime({
      targets: el,
      translateX: [
        {
          value: 0
        },
        {
          value: "-100%",
          duration: 800
        }
      ],
      easing: "easeOutElastic(1, .8)",
      complete: () => {
        done();
      }
    });
  };

  return { onBeforeEnter, onEnter, onLeave };
};

export default useTransition;
