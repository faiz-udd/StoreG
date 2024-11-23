// src/data/files.js
const files = [
  {
    id:1,
    name:"Doc.pdf",
    type:"document",
    modified:"2024-11-20",
    url:"/path/to/doc.pdf"
  },
  {
    id: 1,
    name: "Documents",
    type: "folder",
    contents: [
      {
        id: 2,
        name: "Resume.pdf",
        type: "document",
        modified: "2024-11-21",
        url: "/path/to/resume.pdf"
      },
      {
        id: 3,
        name: "Cover Letter.docx",
        type: "document",
        modified: "2024-11-19",
        url: "/path/to/cover-letter.docx"
      }
    ]
  },
  {
    id: 4,
    name: "Work Files",
    type: "folder",
    contents: [
      {
        id: 5,
        name: "Project Proposal.pptx",
        type: "presentation",
        modified: "2024-11-18",
        url: "/path/to/project-proposal.pptx"
      },
      {
        id: 6,
        name: "Budget.xlsx",
        type: "spreadsheet",
        modified: "2024-11-20",
        url: "/path/to/budget.xlsx"
      }
    ]
  },
  {
    id: 7,
    name: "Empty Folder",
    type: "folder",
    contents: []
  },
  {
    id: 8,
    name: "Images",
    type: "folder",
    contents: [
      {
        id: 9,
        name: "Vacation.jpg",
        type: "document",
        modified: "2024-11-10",
        url: "/path/to/vacation.jpg"
      }
    ]
  }
];


export default files;
