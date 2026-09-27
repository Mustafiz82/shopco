"use client";
// InitializedMDXEditor.jsx

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  CreateLink,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  linkDialogPlugin,
  linkPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";

// Only import this to the next file
export default function InitializedMDXEditor({ editorRef, ...props }) {
  return (
    <div className="relative !z-[999]">
      <MDXEditor
        markdown=""
        plugins={[
          // Example Plugin Usage

          headingsPlugin(),
          linkPlugin(), linkDialogPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarClassName: "my-classname",
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CreateLink />
              </>
            ),
          }),
        ]}
        {...props}
        ref={editorRef}
      />
    </div>
  );
}
