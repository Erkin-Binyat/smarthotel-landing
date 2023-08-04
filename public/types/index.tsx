export type CoreFeatureProps = {
  activeTab?: boolean,
  service: {
    title: string,
    content: {
      title: string,
      heading: string,
      desc: string,
      img: string
    }
  },
  index?: number
};