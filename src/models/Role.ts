import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  nameRole: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Role', roleSchema);
