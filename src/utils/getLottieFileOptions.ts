export const getLottieFileOptions = (animationData: any, loop?: boolean) => {
  return {
    loop: loop ? loop : true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};
