import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// material
import { Button } from '@mui/material';
import Header from '@/layout/Header';
import ConfirmDialog from '@/components/ConfirmDialog';
import FormCampaign from '@/pages/Campaign/FormCampaign';

const Campaign = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleSuccess = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Header title="Campaign" />
      <main>
        <div className="flex flex-row items-center justify-center p-2 font-medium text-center">
          <span>Welcome, add some first campaign</span>
          <div className="flex items-baseline ml-10">
            <Link key="Add Campaign" to="/campaign/add" className="px-3 py-2 text-blue-400">
              Add First Campaign
            </Link>

            <Button
              variant="contained"
              size="large"
              type="button"
              onClick={() => setOpenDialog(true)}
            >
              Open Dialog
            </Button>
          </div>
        </div>
      </main>

      <ConfirmDialog
        maxWidth="lg"
        actionApply={() => {
          setOpenDialog(false);
        }}
        open={openDialog}
        onExit={() => {
          setOpenDialog(false);
        }}
        title="Add Campaign"
      >
        <FormCampaign onSuccess={handleSuccess} />
      </ConfirmDialog>
    </>
  );
};

export default Campaign;
