const hubspotService = ({ hubspotClient }) => {
  const getAllDeals = async () => {
    const limit = 100
    const after = undefined
    const properties = undefined
    const propertiesWithHistory = undefined
    const associations = undefined
    const archived = false
    let result = undefined
    try {
      const apiResponse = await hubspotClient.crm.deals.basicApi.getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived
      )
      if (apiResponse.results) result = apiResponse.results.reverse()
    } catch (e) {
      throw new Error(`Error in getAll: ${e.message}`)
    }
    return result
  }

  const searchDeals = async (queryString) => {
    const filter = { propertyName: 'hs_object_id', operator: 'GTE', value: 0 }
    const filterGroup = { filters: [filter] }
    const sort = JSON.stringify({ propertyName: 'createdate', direction: 'DESCENDING' })
    const query = `*${queryString}*`
    //const properties = ['dealname', 'amount', 'description', 'hs_object_id', 'hs_lastmodifieddate', 'createdate']
    const limit = 100
    const after = 0

    const publicObjectSearchRequest = {
      filterGroups: [filterGroup],
      sorts: [sort],
      query,
      //properties,
      limit,
      after,
    }

    const result = await hubspotClient.crm.deals.searchApi.doSearch(publicObjectSearchRequest)

    return result
  }

  const getAllContacts = async () => {
    try {
      const allContacts = await hubspotClient.crm.contacts.getAll()
      return allContacts
    } catch (e) {
      throw new Error(`Error in createAllContacts: ${e.message}`)
    }
  }

  const createDeal = async (dealObject) => {
    try {
      const response = await hubspotClient.crm.deals.basicApi.create(dealObject)
      if (response.id) {
        const properties = [
          'amount',
          'deal_name',
          'description',
          'parsa_deadline',
          'parsa_technologies',
          'hs_next_step',
          'mrr_jan_23',
        ]
        const createdDeal = await hubspotClient.crm.deals.basicApi.getById(response.id, properties)
        console.log('RESULT OF GET BY ID : ', createdDeal)
      }
      return response
    } catch (e) {
      throw new Error(`Error in createDeal: ${e.message}`)
    }
  }

  const updateDeal = async (id, properties) => {
    // Placeholder, not done.
    try {
      const SimplePublicObjectInput = { properties }
      const response = await hubspotClient.crm.deals.basicApi.update(id, SimplePublicObjectInput)
      return response
    } catch (e) {
      throw new Error(`Error in createDeal: ${e.message}`)
    }
  }

  return Object.freeze({
    getAllDeals,
    getAllContacts,
    createDeal,
    updateDeal,
    searchDeals,
  })
}
module.exports = hubspotService
