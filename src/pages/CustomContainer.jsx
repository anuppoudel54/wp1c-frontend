// CustomContainer.js

import Header from "../partials/Header";
import ContainerHome from "../partials/ContainerHome";
import PageIllustration from "../partials/PageIllustration";

function CustomContainer() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <PageIllustration />
      <Header />
      <ContainerHome />
    </div>
  );
}

export default CustomContainer;
