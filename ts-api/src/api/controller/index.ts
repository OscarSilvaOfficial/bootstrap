import { Generic } from '../models/Generic'


export class Controller {
  
  static select(id: number) {
    return id ? Generic.findOne(id):Generic.find()
  }

  static insert(name: string) {
    const generic = new Generic('TESTE')
    generic.save()
    return "Data insert"
  }

}
