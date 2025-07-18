import AddBlog from "@/components/AddBlog/AddBlog";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import React from "react";

function page() {
  return (
    <PageTemplate title="Manage">
      <AddBlog />
    </PageTemplate>
  );
}

export default page;
