import React from 'react';
import './styles.css';
import moment from 'moment';
import { BsFileCode, BsFolderFill } from 'react-icons/bs';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem file={file} key={file.id} />
      ))}
    </tbody>
  </table>
);

const FileListItem = ({ file }) => (
  <tr>
    <FileName file={file} />
    <FileMessage file={file} />
    <FileTime file={file} />
  </tr>
);

const FileIcon = ({ file }) => {
  let icon;

  switch (file.type) {
    case 'folder':
      icon = <BsFolderFill />;
      break;
    default:
    case 'file':
      icon = <BsFileCode />;
  }

  return icon;
};

const FileName = ({ file }) => (
  <>
    <td className="file-icon">
      <FileIcon file={file} />
    </td>
    <td className="file-name">{file.name}</td>
  </>
);

const FileMessage = ({ file }) => (
  <td className={'file-message'}>{file.latestCommit.message}</td>
);

const FileTime = ({ file }) => (
  <td className={'file-time'}>{file.updated_at}</td>
);

const data = [
  {
    id: 1,
    name: 'build',
    type: 'folder',
    updated_at: moment('2021-08-05T11:03:44+00:00').fromNow(),
    latestCommit: {
      message: 'Updated the build to latest version',
    },
  },
  {
    id: 2,
    name: 'dist',
    type: 'folder',
    updated_at: moment('2021-08-05T11:03:44+00:00').fromNow(),
    latestCommit: {
      message: 'Added and assets folder',
    },
  },
  {
    id: 3,
    name: 'src',
    type: 'folder',
    updated_at: moment('2021-08-05T11:03:44+00:00').fromNow(),
    latestCommit: {
      message: 'Updated styles and cleaned up code',
    },
  },
  {
    id: 4,
    name: 'README.md',
    type: 'file',
    updated_at: moment('2021-08-05T11:03:44+00:00').fromNow(),
    latestCommit: {
      message: 'Re-did the whole readme file',
    },
  },
  {
    id: 5,
    name: 'package.json',
    type: 'file',
    updated_at: moment('2021-08-05T11:03:44+00:00').fromNow(),
    latestCommit: {
      message: 'Cleaned up my dependecies',
    },
  },
];

export default function App() {
  return (
    <div className="App">
      <FileList files={data} />
    </div>
  );
}
