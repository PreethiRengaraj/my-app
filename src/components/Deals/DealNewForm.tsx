import React, { useState } from 'react';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import UseProfile from '../../images/profile.svg';

interface PopupFormProps {
    onClose: () => void;
    onSubmit: (event: React.FormEvent) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
    return (
        <div className='NewDealform popup'>
            <div className='DealFormopen popup-inner'>
            <div className='deal-hader'>
                        <div className='deal-info-title'>Deal Information</div>
                        <div className='deal-info-manager'>
                            <div className='Deals-user-profile'>
                                <a className='Deals-user-profile-img'><img src={UseProfile} alt="profile" /></a>
                                <div className='Owner-name'>Owner Name</div>
                            </div>
                        </div>
                    </div>
                <form onSubmit={onSubmit} className='Deal-Froms'>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Deal Name <span className="required"> * </span> </label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Deal Name" />
                            <div className="invalid-feedback">
                                Please fill the Contact Name.
                            </div>
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Contact Name <span className="required"> * </span></label>
                            {/* if the input field is empty pass the "is-invalid" class name near to form-control */}
                            <div className="inputGroup">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Contact Name" />
                                <p className="error_msg"> Please enter a your contact name </p>
                                <div className="inputImage"><AccountBoxOutlinedIcon className='svg' /></div>
                            </div>
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Company Name</label>
                            <div className="inputGroup">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company Name" />
                                <div className="inputImage"><CorporateFareOutlinedIcon className='svg' /></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Solution <span className="required"> * </span> </label>
                            <select id="formGroupExampleInput" className="form-control" >
                                <option selected>-None-</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please fill the Contact Name.
                            </div>
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Stage <span className="required"> * </span></label>
                            {/* if the input field is empty pass the "is-invalid" class name near to form-control */}
                            <select id="formGroupExampleInput" className="form-control" >
                                <option selected>Choose a stage...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Amount</label>
                            <div className="inputGroup">
                                <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Amount" />
                                <div className="inputImage"><span className='currency'>AED</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Closing Date <span className="required"> * </span> </label>
                            <input type="date" className="form-control" id="formGroupExampleInput" />
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Discription </label>
                            {/* if the input field is empty pass the "is-invalid" class name near to form-control */}
                            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="A few words about thid deals" />
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Lead Source</label>
                            <select id="formGroupExampleInput" className="form-control" >
                                <option selected>-None-</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>


                    <div className="row">

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Type</label>
                            <select id="formGroupExampleInput" className="form-control" >
                                <option selected>-None-</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Probability(%)  </label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Probability" />
                        </div>

                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Expected Revenue</label>
                            <div className="inputGroup">
                                <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Expected Revenue" />
                                <div className="inputImage"><span className='currency'>AED</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='dealsLable'>Next Step </label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Next Step " />
                        </div>
                    </div>

                    <div className="popup-buttons">
                        <button type="submit" className='DealsSubmit-btn'>Submit</button>
                        <button type="button" className='DealsCancel-btn' onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupForm;