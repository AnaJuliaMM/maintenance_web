import React, { useState } from "react";
import { Title } from "@/app/components/Title";

import { FileUpload } from "primereact/fileupload";

export default function Home() {
  return (
    <main className="flex flex-col p-6 w-svw gap-4 h-fit">
      <Title>Cadastrar Máquina</Title>
      <section className="flex justify-items-end gap-2 items-center cursor-pointer">
        <div className="bg-zinc-400/10 p-8 rounded-lg mb-4">
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={
              <p className="m-0">Faça o upload de imagens.</p>
            }
          />
        </div>
      </section>
    </main>
  );
}
