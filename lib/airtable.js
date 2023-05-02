import Airtable from 'airtable';

Airtable.configure({
  apiKey: 'pat1k3mvfPdCp7I2p.e893723d0c66dd47f1e79af33efba4f68550a243a9635bf463d0e3035d30e01f',
});

const base = Airtable.base('app8RAOMIk1wweEod');
const tableName = 'BulbasaurData';

export async function getBulbasaurData(name) {
  try {
    const records = await base(tableName)
      .select({
        filterByFormula: `Name = '${name}'`,
        maxRecords: 1,
      })
      .all();

    if (records && records.length > 0) {
      return records[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching Bulbasaur data:', error);
    return null;
  }
}

export async function saveBulbasaurData(data) {
  try {
    const existingRecord = await getBulbasaurData(data.name);
    if (existingRecord) {
      // Update existing record
      await base(tableName).update(existingRecord.id, {
        Hunger: data.hunger,
        Happiness: data.happiness,
        Health: data.health,
      });
    } else {
      // Create new record
      await base(tableName).create({
        Name: data.name,
        Hunger: data.hunger,
        Happiness: data.happiness,
        Health: data.health,
      });
    }
  } catch (error) {
    console.error('Error saving Bulbasaur data:', error);
  }
}
