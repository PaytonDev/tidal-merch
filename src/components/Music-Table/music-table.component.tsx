import React from 'react'
import './music-table.styles.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CanIImage from '../../assets/images/can-i-cover.jpg'
import ILikeThatImage from '../../assets/images/i-like-that-cover.jpg'
import BeautifulLiesImage from '../../assets/images/beautiful-lies-cover.jpg'
import UrBestFriendImage from '../../assets/images/ur-best-friend-cover.jpg'
import { Plus, Heart } from 'react-bootstrap-icons'

interface MusicTableProps {}

function createData(
  artwork: JSX.Element,
  title: string,
  artist: string,
  album: string,
  time: string,
  addToPlaylist: JSX.Element,
  favorite: JSX.Element
) {
  return { artwork, title, artist, album, time, addToPlaylist, favorite }
}

const rows = [
  createData(
    <div>
      <img alt="I Like That album cover" src={ILikeThatImage} />
    </div>,
    'I Like That',
    'T-Pain, Kehlani',
    'I Like That',
    '4:02',
    <div>
      <Plus className="table-icon" />
    </div>,
    <div>
      <Heart className="table-icon" />
    </div>
  ),
  createData(
    <div>
      <img alt="Beautiful Lies cover" src={BeautifulLiesImage} />
    </div>,
    'Beautiful Lies',
    'Yung Bleu, Kehlani',
    'Moon Boy',
    '3:33',
    <div>
      <Plus className="table-icon" />
    </div>,
    <div>
      <Heart className="table-icon" />
    </div>
  ),
  createData(
    <div>
      <img alt="Can I album cover" src={CanIImage} />
    </div>,
    'Can I',
    'Kehlani',
    "It Was Good Until It Wasn't",
    '3:00',
    <div>
      <Plus className="table-icon" />
    </div>,
    <div>
      <Heart className="table-icon" />
    </div>
  ),
  createData(
    <div>
      <img alt="Your Best Friend cover" src={UrBestFriendImage} />
    </div>,
    'Ur Best Friend',
    'Kehlani',
    'Ur Best Friend',
    '3:03',
    <div>
      <Plus className="table-icon" />
    </div>,
    <div>
      <Heart className="table-icon" />
    </div>
  ),
]

const tableStyles = {
  tableContainer: {
    color: '#e6e4e1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '50px',
    width: '90%',
  },
  table: { width: '100%' },
  tableRow: { border: 'none' },
  tableHead: {
    color: '#badcffa8',
    padding: '2px 16px',
    textTransform: 'uppercase',
    border: 'none',
    fontWeight: 400,
  },
  tableCell: {
    color: '#e6e4e1',
    padding: '2px 16px',
    border: 'none',
    fontWeight: 400,
  },
}

const { tableContainer, table, tableRow, tableHead, tableCell } = tableStyles

const MusicTable = () => {
  return (
    <div className="music-table-section">
      <TableContainer
        component="div"
        className="music-table-container"
        sx={tableContainer}
      >
        <header className="top-tracks-header">
          <p className="top-tracks">Top Tracks</p>
          <div className="view-all">
            <p>View All</p>
          </div>
        </header>
        <Table className="music-table" sx={table}>
          <TableHead sx={tableHead}>
            <TableRow>
              <TableCell className="header-cell" sx={tableHead}></TableCell>
              <TableCell className="header-cell" sx={tableHead}>
                Title
              </TableCell>
              <TableCell className="header-cell" sx={tableHead}>
                Artist
              </TableCell>
              <TableCell className="header-cell" sx={tableHead}>
                Album
              </TableCell>
              <TableCell className="header-cell" sx={tableHead}>
                Time
              </TableCell>
              <TableCell className="header-cell" sx={tableHead}></TableCell>
              <TableCell className="header-cell" sx={tableHead}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title} sx={tableRow}>
                <TableCell
                  component="th"
                  scope="row"
                  className="table-cell"
                  sx={tableCell}
                >
                  {row.artwork}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.title}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.artist}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.album}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.time}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.addToPlaylist}
                </TableCell>
                <TableCell align="left" className="table-cell" sx={tableCell}>
                  {row.favorite}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MusicTable
