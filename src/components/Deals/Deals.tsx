import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PopupForm from './DealNewForm';
import ShowPopupButton from './Dealsbutton';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const Deals: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  // Function to handle showing the popup
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
    setShowPopup(false);
  };

  // Function to handle accordion expansion
  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  // Sample data for table
  const rows = [
    { id: 1, account: 'New account', domain: '', contact: '', deals: [], priority: '' },
    { id: 2, account: 'Bindeer Inc.', domain: 'binder.com', contact: 'Alex Green', deals: ['Deal 1'], priority: 'Medium' },
    { id: 3, account: 'Pear Inc.', domain: 'pear.inc', contact: 'Alex Green', deals: ['Deal 2'], priority: 'Low' },
    { id: 4, account: 'HSBF', domain: 'hsbf.co', contact: 'Phoenix Levy', deals: ['Deal 3', 'Deal 4'], priority: 'High' },
  ];

  // Handle select/deselect all rows
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(event.target.checked);
    if (event.target.checked) {
      setSelectedRows(rows.map(row => row.id)); // Select all rows
    } else {
      setSelectedRows([]); // Deselect all rows
    }
  };

  // Handle individual row selection
  const handleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id)); // Deselect row
    } else {
      setSelectedRows([...selectedRows, id]); // Select row
    }
  };

  return (
    <div className="Deals-page">
      <div className="Deals-position-fix">
        <div className="clearfix">
          <div className="float-left">
            <div className="titleHeading">Deals</div>
          </div>
          <div className="float-right">
            <ShowPopupButton onClick={handleShowPopup} />
          </div>
        </div>
        {showPopup && (
          <PopupForm onClose={handleClosePopup} onSubmit={handleSubmit} />
        )}
      </div>

      <div className="deals-table-position">
        {/* Accordion wrapping the table */}
        <Accordion
          expanded={expanded}
          onChange={handleAccordionChange}
          sx={{ 
            boxShadow: 'none', // Remove box shadow
            border: 'none',    // Remove border
            '&:before': { display: 'none' } // Remove the default Material-UI divider line
          }}
        >
          <AccordionSummary id='Accoordion'
            expandIcon={<ExpandMoreIcon />} /* Arrow automatically rotates */
            sx={{
              flexDirection: 'row-reverse', // Move arrow before the text
              '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(180deg)', // Rotate the arrow up when expanded
              },
              '& .MuiAccordionSummary-content': {
                marginLeft: '10px', // Add space between arrow and text
              },
    minHeight: "auto !important",
    padding:"0px",
            }}
          >
            <Typography variant="h6" style={{fontSize:"18px",color:"#009688 "}}>Deals Information</Typography>
          </AccordionSummary>

          <AccordionDetails style={{padding:'0px',}}>
            <TableContainer component={Paper} style={{ marginTop: '20px' }} className="Deals-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                        checked={rows.length > 0 && selectedRows.length === rows.length}
                        onChange={handleSelectAllClick}
                      />
                    </TableCell>
                    <TableCell>Account</TableCell>
                    <TableCell>Domain</TableCell>
                    <TableCell>Contacts</TableCell>
                    <TableCell>Deals</TableCell>
                    <TableCell>Priority</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleSelectRow(row.id)}
                        />
                      </TableCell>
                      <TableCell>{row.account}</TableCell>
                      <TableCell>
                        {row.domain ? (
                          <Link href={`https://${row.domain}`} target="_blank" rel="noopener">
                            {row.domain}
                          </Link>
                        ) : (
                          <span>—</span>
                        )}
                      </TableCell>
                      <TableCell className="Deals-contact">
                        {row.contact ? (
                          <Chip
                            avatar={<Avatar>{row.contact[0]}</Avatar>}
                            label={row.contact}
                            variant="outlined"
                          />
                        ) : (
                          <span>—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {Array.isArray(row.deals) && row.deals.length > 0 ? (
                          row.deals.map((deal, idx) => (
                            <Chip key={idx} label={deal} variant="outlined" icon={<MonetizationOnOutlinedIcon />} />
                          ))
                        ) : (
                          <span>—</span>
                        )}
                      </TableCell>
                      <TableCell className="Deals-priority" 
                      style={{ width: "88px",
    borderRadius: "5px"}}>
                        {row.priority === 'High' && <Chip label="High" style={{ backgroundColor: '#FF6D3B', color: 'white' ,width: "88px",
    borderRadius: "5px"}} />}
                        {row.priority === 'Medium' && <Chip label="Medium" style={{ backgroundColor: '#589BFF', color: 'white', width: "88px",
    borderRadius: "5px" }} />}
                        {row.priority === 'Low' && <Chip label="Low" style={{ backgroundColor: '#50CAC8', color: 'white',width: "88px",
    borderRadius: "5px" }} />}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Deals;
