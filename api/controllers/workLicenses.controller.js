const licenseServices = require("../services/workLicenses.services");

module.exports = {
  getAll: async (req, res, next) => {
    const id = req.params.id;
    const { countryOfResidence } = req.query
    try {
      const allLicences = await licenseServices.getAll(id,countryOfResidence);
      if (!allLicences)
        return res.status(404).json({ message: "Licence not found" });
      return res.status(200).json(allLicences);
    } catch (error) {
      next(error);
    }
  },

  bossGetAll: async (req, res, next) => {
    const id = req.params.id;
    const { name } = req.query;
    try {
      const allLicences = await licenseServices.bossGetAll(id,name);
      if (!allLicences)
        return res.status(404).json({ message: "Licence not found" });
      return res.status(200).json(allLicences);
    } catch (error) {
      next(error);
    }
  },

  getByUser: async (req, res, next) => {
    const userId = req.params.userId;
    try {
      const allLicences = await licenseServices.getByUser(userId);
      if (!allLicences)
        return res.status(404).json({ message: "Licence not found" });
      return res.status(200).json(allLicences);
    } catch (error) {
      next(error);
    }
  },

  addLicense: async (req, res, next) => {
    const { ...data } = req.body;
    try {
      const licenseCreated = await licenseServices.addLicense(data);
      return res.status(201).json(licenseCreated);
    } catch (error) {
      next(error);
    }
  },

  deleteLicence: async (req, res, next) => {
    const licenceId = req.params.licenseId;
    try {
      await licenseServices.deleteLicence(licenceId);
      res.status(204).json("DELETED");
    } catch (error) {
      next(error);
    }
  },

  updateLicense: async (req, res, next) => {
    const licenseId = req.body.id;
    const data = req.body;
    try {
      const updatedLicense = await licenseServices.updateLicense(
        licenseId,
        data
      );
      return res.status(202).json(updatedLicense);
    } catch (error) {
      next(error);
    }
  },

  getLicence: async (req, res, next) => {
    const licenseId = req.params.licenseId;
    try {
      const license = await licenseServices.getLicence(licenseId);
      return res.status(200).json(license);
    } catch (error) {
      next(error);
    }
  },
  getLicenceByInput: async (req, res, next) => {
    const input = req.params.input;
    const { countryOfResidence } = req.query;
    try {
      const license = await licenseServices.getLicenceByInput(
        input,
        countryOfResidence
      );
      return res.status(200).json(license);
    } catch (error) {
      next(error);
    }
  },

  getByType: async (req, res, next) => {
    const type = req.body.type;
    try {
      const licenses = await licenseServices.getByType(type);
      return res.send(licenses);
    } catch (error) {
      next(error);
    }
  },

  getBydate: async (req, res, next) => {
    const date = req.body.date;
    try {
      const licenses = await licenseServices.getBydate(date);
      return res.send(licenses);
    } catch (error) {
      next(error);
    }
  },
};
