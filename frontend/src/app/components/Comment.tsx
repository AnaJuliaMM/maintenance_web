import React, { useState } from "react";
import { StringDecoder } from "string_decoder";

// Definindo a interface para as props do componente
interface CommentProps {
  id: string;
  content: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, newContent: string) => void;
}

export const Comment: React.FC<CommentProps> = ({
  id,
  content,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Quando for implementado funcionalidade
  //   const handleSaveClick = () => {
  //     onEdit(id, newContent);
  //     setIsEditing(false);
  //   };

  //   const handleDeleteClick = () => {
  //     onDelete(id);
  //   };

  return (
    <div className="border p-4 rounded-md shadow-sm bg-gray-50">
      {isEditing ? (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      ) : (
        <p className="text-gray-950">{content}</p>
      )}
      <div className="flex justify-end space-x-2 mt-2">
        {isEditing ? (
          <button
            // onClick={handleSaveClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            // onClick={handleEditClick}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            Edit
          </button>
        )}
        <button
          //   onClick={handleDeleteClick}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
